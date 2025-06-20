import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { indentWithTab } from "@codemirror/commands";

AMF.plugin("CodeMirror", () => {
	const acts = ["wrap", "webpages", "templates", "style"];
	const nameToLang = {
		template: html,
		html,
		css
	};
	AMF.on("content-frame-load", ({ contentWindow, contentUrl }) => {
		if (
			!(
				acts.includes(contentUrl?.searchParams.get("act")) &&
				contentUrl?.searchParams.get("code") === "edit"
			)
		)
			return;

		const { document } = contentWindow;

		const textarea = document.querySelector(
			Object.keys(nameToLang)
				.map((name) => `textarea[name="${name}"]`)
				.join(",")
		);
		const langExt = nameToLang[textarea.name];
		const editorDiv = document.createElement("div");
		editorDiv.style.textAlign = "left";
		textarea.insertAdjacentElement("afterend", editorDiv);
		const view = new EditorView({
			doc: textarea.value,
			parent: editorDiv,
			extensions: [basicSetup, langExt(), keymap.of([indentWithTab])]
		});
		textarea.style.display = "none";

		const saveButton = textarea.closest("form").querySelector("#button");
		const initialOnclick = saveButton.onclick;
		saveButton.removeAttribute("onclick");
		saveButton.addEventListener("click", () => {
			textarea.value = view.state.doc.toString();
			initialOnclick();
		});
	});
});
