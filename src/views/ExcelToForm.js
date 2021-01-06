import React, { Component, Fragment } from 'react';
import { selectRoot, Form, saveForm, FormEdit, FormBuilder } from 'react-formio';
import { connect } from 'react-redux';

import _ from 'lodash';
import { AppConfig } from '../config';

const ExcelToForm = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormCreated: false,
            createdForm: null,
        };
    }

    buttonClick = () => {
        this.setState({ isFormCreated: false });

        const { text } = this.state;

        const commonAttri = {
            allowCalculateOverride: false,
            allowMultipleMasks: false,
            attributes: {},
            autofocus: false,
            calculateServer: false,
            calculateValue: "",
            clearOnHide: true,
            conditional: { show: null, when: null, eq: "", json: "" },
            customClass: "",
            customDefaultValue: "",
            dbIndex: false,
            defaultValue: null,
            description: "",
            disabled: false,
            encrypted: false,
            errorLabel: "",
            hidden: false,
            hideLabel: false,
            input: true,
            showCharCount: false,
            showWordCount: false,
            validateOn: "change",
            placeholder: "",
            prefix: "",
            properties: {},
            protected: false,
            redrawOn: "",
            refreshOn: "",
            modalEdit: false,
            multiple: false,
        };

        // ... the below should be unique ... 
        // id: "epaepvj"
        // key: "",
        // label: "",
        // labelPosition: "",

        const textfield = {
            case: "",
            customConditional: "",
            inputFormat: "plain",
            inputMask: "",
            inputType: "text",
            logic: [],
            mask: false,
            overlay: {
                height: "",
                left: "",
                page: "",
                style: "",
                top: "",
                width: "",
            },
            persistent: true,
            spellcheck: true,
            suffix: "",
            tabindex: "",
            tableView: true,
            tags: [],
            tooltip: "",
            type: "textfield",
            unique: false,
            widget: { type: "input" },
            validate: {
                custom: "",
                customMessage: "",
                customPrivate: false,
                json: "",
                maxLength: "",
                minLength: "",
                pattern: "",
                required: false,
                strictDateValidation: false,
                unique: false,
            },
        };

        const numberField = {
            label: "Number",
            mask: false,
            spellcheck: true,
            tableView: false,
            delimiter: false,
            requireDecimal: false,
            inputFormat: "plain",
            key: "number",
            type: "number",
            suffix: "",
            multiple: false,
            unique: false,
            persistent: true,
            labelPosition: "top",
            tooltip: "",
            tabindex: "",
            widget: {
                type: "input"
            },
            validate: {
                required: false,
                custom: "",
                customPrivate: false,
                strictDateValidation: false,
                multiple: false,
                unique: false,
                min: "",
                max: "",
                step: "any",
                integer: ""
            },
            overlay: {
                style: "",
                left: "",
                top: "",
                width: "",
                height: ""
            },
            id: "esnywp"
        }



        const radioGroup = {
            label: "Radio",
            optionsLabelPosition: "right",
            inline: false,
            tableView: false,
            widget: null,
            values: [
                {
                    label: "Radio1",
                    value: "radio1",
                    shortcut: "D"
                },
                {
                    label: "Radio2",
                    value: "radio2",
                    shortcut: "C"
                },
                {
                    label: "Radio3",
                    value: "radio3",
                    shortcut: "G"
                }
            ],
            key: "radio",
            type: "radio",
            suffix: "",
            unique: false,
            persistent: true,
            labelPosition: "top",
            tooltip: "",
            tabindex: "",
            validate: {
                required: false,
                custom: "",
                customPrivate: false,
                strictDateValidation: false,
                multiple: false,
                unique: false
            },
            overlay: {
                style: "",
                left: "",
                top: "",
                width: "",
                height: ""
            },
            inputType: "radio",
            fieldSet: false,
            id: "e4kxfi"
        }

        const button = {
            block: false,
            action: "submit",
            dataGridLabel: true,
            disableOnInvalid: true,
            leftIcon: "",
            widget: { type: "input" },
            overlay: {
                style: "",
                left: "",
                top: "",
                width: "",
                height: ""
            },
            persistent: false,
            rightIcon: "",
            size: "md",
            suffix: "",
            tabindex: "",
            tableView: false,
            theme: "primary",
            tooltip: "",
            type: "button",
            unique: false,
            validate: {
                custom: "",
                customPrivate: false,
                multiple: false,
                required: false,
                strictDateValidation: false,
                unique: false,
            }
        };

        const checkbox = {
            label: "Checkbox",
            tableView: false,
            key: "checkbox1",
            type: "checkbox",
            suffix: "",
            defaultValue: null,
            protected: false,
            unique: false,
            persistent: true,
            labelPosition: "right",
            tooltip: "",
            tabindex: "",
            dbIndex: false,
            widget: null,
            validate: {
                required: false,
                custom: "",
                customPrivate: false,
                strictDateValidation: false,
                multiple: false,
                unique: false
            },
            conditional: {
                show: null,
                when: null,
                eq: ""
            },
            overlay: {
                style: "",
                left: "",
                top: "",
                width: "",
                height: ""
            },
            inputType: "checkbox",
            dataGridLabel: true,
            value: "",
            name: "",
            id: "ervmyfc"
        };

        const select = {
            label: "Select",
            widget: "choicesjs",
            tableView: true,
            data: {
                values: [
                    {
                        label: "Value1",
                        value: "value1"
                    },
                    {
                        label: "Value2",
                        value: "value2"
                    },
                    {
                        label: "Value3",
                        value: "value3"
                    }
                ],
                json: "",
                url: "",
                resource: "",
                custom: ""
            },
            selectThreshold: 0.3,
            key: "select",
            type: "select",
            indexeddb: {
                filter: {}
            },
            customClass: "",
            suffix: "",
            multiple: false,
            defaultValue: null,
            protected: false,
            unique: false,
            persistent: true,
            refreshOn: "",
            redrawOn: "",
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            tabindex: "",
            validate: {
                required: false,
                custom: "",
                customPrivate: false,
                strictDateValidation: false,
                multiple: false,
                unique: false
            },
            conditional: {
                show: null,
                when: null,
                eq: ""
            },
            overlay: {
                style: "",
                left: "",
                top: "",
                width: "",
                height: ""
            },
            clearOnRefresh: false,
            limit: 100,
            dataSrc: "values",
            valueProperty: "",
            lazyLoad: true,
            filter: "",
            searchEnabled: true,
            searchField: "",
            minSearch: 0,
            readOnlyValue: false,
            authenticate: false,
            template: "<span>{{ item.label }}</span>",
            selectFields: "",
            searchThreshold: 0.3,
            uniqueOptions: false,
            fuseOptions: {
                include: "score",
                threshold: 0.3
            },
            customOptions: {},
            id: "etk7cgo"
        };

        const form = {
            display: 'form',
            "components": [
                {
                    ...commonAttri,
                    ...textfield,
                    id: 'ellhrpc',
                    key: 'textField',
                    label: 'Text Field',
                    labelPosition: 'top',
                },
                {
                    ...commonAttri,
                    ...textfield,
                    id: 'ellhrpc',
                    key: 'textField2',
                    label: 'Text Field 2222',
                    labelPosition: 'top',
                },
                {
                    ...commonAttri,
                    ...button,
                    id: 'elep0j',
                    key: 'submit',
                    label: 'Submit',
                    labelPosition: "top",
                },
                {
                    ...commonAttri,
                    ...radioGroup,
                    id: 'rdGrp',
                    key: 'radio',
                    label: 'SelectOneOption',
                    labelPosition: "top",
                },


                // {
                //     "label": "Text Field", "labelPosition": "top", "placeholder": "", "description": "", "tooltip": "", "prefix": "", "suffix": "",
                //     "widget": { "type": "input" }, "inputMask": "", "allowMultipleMasks": false, "customClass": "", "tabindex": "",
                //     "hidden": false, "hideLabel": false, "showWordCount": false, "showCharCount": false, "mask": false,
                //     "autofocus": false, "spellcheck": true, "disabled": false, "tableView": true, "modalEdit": false, "multiple": false,
                //     "persistent": true, "inputFormat": "plain", "protected": false, "dbIndex": false, "case": "", "encrypted": false,
                //     "redrawOn": "", "clearOnHide": true, "customDefaultValue": "", "calculateValue": "", "calculateServer": false,
                //     "allowCalculateOverride": false, "validateOn": "change",
                //     "validate": {
                //         "required": false, "pattern": "",
                //         "customMessage": "", "custom": "", "customPrivate": false, "json": "", "minLength": "",
                //         "maxLength": "", "strictDateValidation": false, "multiple": false, "unique": false
                //     }, "unique": false, "errorLabel": "", "key": "textField", "tags": [], "properties": {},
                //     "conditional": { "show": null, "when": null, "eq": "", "json": "" },
                //     "customConditional": "", "logic": [], "attributes": {},
                //     "overlay": { "style": "", "page": "", "left": "", "top": "", "width": "", "height": "" },
                //     "type": "textfield", "input": true, "refreshOn": "", "inputType": "text", "id": "ellhrpc", "defaultValue": null
                // },
                // {
                //     "type": "button", "label": "Submit", "key": "submit", "size": "md", "block": false, "action": "submit",
                //     "disableOnInvalid": true,
                //     "theme": "primary", "input": true, "placeholder": "", "prefix": "", "customClass": "", "suffix": "", "multiple": false, "defaultValue": null,
                //     "protected": false, "unique": false, "persistent": false, "hidden": false, "clearOnHide": true, "refreshOn": "", "redrawOn": "",
                //     "tableView": false, "modalEdit": false, "labelPosition": "top", "description": "", "errorLabel": "", "tooltip": "", "hideLabel": false,
                //     "tabindex": "", "disabled": false, "autofocus": false, "dbIndex": false, "customDefaultValue": "", "calculateValue": "",
                //     "widget": { "type": "input" }, "attributes": {}, "validateOn": "change",
                //     "validate": {
                //         "required": false, "custom": "", "customPrivate": false, "strictDateValidation": false,
                //         "multiple": false, "unique": false
                //     },
                //     "conditional": { "show": null, "when": null, "eq": "" },
                //     "overlay": { "style": "", "left": "", "top": "", "width": "", "height": "" },
                //     "allowCalculateOverride": false, "encrypted": false, "showCharCount": false,
                //     "showWordCount": false, "properties": {}, "allowMultipleMasks": false, "leftIcon": "",
                //     "rightIcon": "", "dataGridLabel": true, "id": "elep0j"
                // }
            ],
            "title": text,
            "name": _.camelCase(text),
            "path": (_.camelCase(text)).toLowerCase(),
        };

        this.props.saveForm(form, this.cb);
    };

    cb = (createdForm) => {
        this.setState({
            isFormCreated: true,
            createdForm
        });
    };

    textChanged = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        const { isFormCreated, createdForm } = this.state;

        return (
            <div>
                {isFormCreated && <div> Form Created successfully... <br /><br /></div>}

                {!isFormCreated && <Fragment>
                    <h3> Forms </h3>
                    <input type="text" onChange={this.textChanged} />
                    <button onClick={this.buttonClick}> Create form </button>
                </Fragment>}
                <br /><br />

                {createdForm && <Fragment>
                    <h3>{createdForm.title}</h3>
                    <FormBuilder
                        form={createdForm}
                        // saveText={'Update Form'}
                        // saveForm={() => { }}
                    // src={`${AppConfig.projectUrl}/${createdForm.path}`}
                    />
                </Fragment>}
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveForm: (form, cb) => {
            debugger;
            const newForm = {
                ...form,
                tags: ['common', 'byKrishna'],
            };

            dispatch(saveForm('form', newForm, (err, form) => {
                if (!err) {
                    debugger;
                    console.trace(form);
                    //   dispatch(push(`/form/${form._id}`))

                    if (cb)
                        cb(form);
                }

                // debugger;
                // console.trace(form);
            }));


        },
    }
};

export default connect(
    null,
    mapDispatchToProps
)(ExcelToForm);
