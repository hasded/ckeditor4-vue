/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global CKEDITOR */

import { debounce, getEditorNamespace } from 'ckeditor4-integrations-common';

export default {
	name: 'ckeditor',

	render( createElement ) {
		return createElement( 'div', {}, [
			createElement( this.tagName )
		] );
	},

	props: {
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'classic',
			validator: type => [ 'classic', 'inline' ].includes( type )
		},
		editorUrl: {
			type: String,
			default: 'https://cdn.ckeditor.com/4.17.1/standard-all/ckeditor.js'
		},
		config: {
			type: Object,
			default: () => {}
		},
		tagName: {
			type: String,
			default: 'textarea'
		},
		readOnly: {
			type: Boolean,
			default: null // Use null as the default value, so `config.readOnly` can take precedence.
		},
		throttle: {
			type: Number,
			default: 80
		}
	},

	mounted() {
		getEditorNamespace( this.editorUrl, namespace => {
			this.$emit( 'namespaceloaded', namespace );
		} ).then( () => {
			if ( this.$_destroyed ) {
				return;
			}
			const config = this.config || {};
			if ( config.delayIfDetached === undefined ) {
				config.delayIfDetached = true;
			}
			if ( this.readOnly !== null ) {
				config.readOnly = this.readOnly;
			}

			const method = this.type === 'inline' ? 'inline' : 'replace';
			const element = this.$el.firstElementChild;
			// console.log( '#'.repeat( 999 ) );
			// console.log( config.on );
			// console.log( config.on.instanceReady );
			let instanceReadyCallback;
			if ( config.on && config.on.instanceReady ) {
				instanceReadyCallback = config.on.instanceReady;
			}
			config.on = {
				// TODO cache somewhere oninstance ready?
				instanceReady: evt => {
					if ( instanceReadyCallback ) {
						instanceReadyCallback( evt );
					}
					const createdEditor = evt.editor;
					this.instance = createdEditor;
					this.$nextTick().then( () => {
						const data = this.value;

						createdEditor.fire( 'lockSnapshot' );

						createdEditor.setData( data, { callback: () => {
							this.$_setUpEditorEvents();

							const newData = createdEditor.getData();

							// Locking the snapshot prevents the 'change' event.
							// Trigger it manually to update the bound data.
							if ( data !== newData ) {
								this.$once( 'input', () => {
									this.$emit( 'ready', createdEditor );
								} );

								this.$emit( 'input', newData );
							} else {
								this.$emit( 'ready', createdEditor );
							}

							createdEditor.fire( 'unlockSnapshot' );
						} } );
					} );
				}
			};
			this.instance = CKEDITOR[ method ]( element, config );
		} );
	},

	beforeDestroy() {
		if ( this.instance ) {
			this.instance.destroy();
		}

		this.$_destroyed = true;
	},

	watch: {
		value( val ) {
			if ( this.instance && this.instance.getData() !== val ) {
				this.instance.setData( val );
			}
		},

		readOnly( val ) {
			if ( this.instance ) {
				this.instance.setReadOnly( val );
			}
		}
	},

	methods: {
		$_setUpEditorEvents() {
			const editor = this.instance;

			const onChange = debounce( evt => {
				const data = editor.getData();

				// Editor#change event might be fired without an actual data change.
				if ( this.value !== data ) {
					// The compatibility with the v-model and general Vue.js concept of input–like components.
					this.$emit( 'input', data, evt, editor );
				}
			}, this.throttle );

			editor.on( 'change', onChange );

			editor.on( 'focus', evt => {
				this.$emit( 'focus', evt, editor );
			} );

			editor.on( 'blur', evt => {
				this.$emit( 'blur', evt, editor );
			} );
		}
	}
};
