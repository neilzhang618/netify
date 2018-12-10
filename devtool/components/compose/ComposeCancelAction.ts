import {LitElement, html, customElement} from '@polymer/lit-element'
import '../@common/SelectDropdown'
import '../@common/SelectOption'
import './ComposeActionRow.ts'
declare global {
	interface HTMLElementTagNameMap {
		'compose-cancel-action': ComposeCancelAction;
	}
}

@customElement('compose-cancel-action' as any)
export class ComposeCancelAction extends LitElement {
	protected render() {
		return html`
		<style>
			:host {
				all: initial;
				display: block;
				font-family: inherit;
			}
			#reason {
				width: 140px;
			}
			#endpoint {
				display: flex;
			}
			.endpoint-item {
				margin-right: 16px;
			}
		</style>
		<compose-action-row title="Cancel reason:">
			<select-dropdown id="reason">
				<select-option value="Aborted" selected>Aborted</select-option>
				<select-option value="Failed">Failed</select-option>
				<select-option value="TimedOut">TimedOut</select-option>
				<select-option value="AccessDenied">AccessDenied</select-option>
				<select-option value="ConnectionClosed">ConnectionClosed</select-option>
				<select-option value="ConnectionReset">ConnectionReset</select-option>
				<select-option value="ConnectionRefused">ConnectionRefused</select-option>
				<select-option value="ConnectionAborted">ConnectionAborted</select-option>
				<select-option value="ConnectionFailed">ConnectionFailed</select-option>
				<select-option value="NameNotResolved">NameNotResolved</select-option>
				<select-option value="InternetDisconnected">InternetDisconnected</select-option>
				<select-option value="AddressUnreachable">AddressUnreachable</select-option>
				<select-option value="BlockedByClient">BlockedByClient</select-option>
				<select-option value="BlockedByResponse">BlockedByResponse</select-option>
			</select-dropdown>
		</compose-action-row>
		
		<compose-action-row title="Cancel point:">
			<radio-group id="endpoint">
				<radio-button class="endpoint-item" value="request" selected>On request</radio-button>
				<radio-button class="endpoint-item" value="response">On response</radio-button>
			</radio-group>
		</compose-action-row>
		`;
	}
}
