import React, { Component } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/ext-language_tools";

export default class AceEditors extends Component {
    render() {
        return(
            <AceEditor
                mode="html"
                theme="merbivore_soft"
                name="Playground"
                fontSize={15}
                height='100%'
                width='100%'
                value={this.props.values}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showPrintMargin: false
                }}
            />
        )
    }
}
