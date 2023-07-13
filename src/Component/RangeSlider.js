import React, { useState } from 'react';
import Form from 'react-jsonschema-form';

const RangeSliderForm = () => {
    const [formData, setFormData] = useState({ minValue: "", maxValue: "" });

    const schema = {
        type: 'object',
        properties: {
            minValue: { type: 'number', minimum: 0, maximum: 1000 },
            maxValue: { type: 'number', minimum: 0, maximum: 1000 },
        },
    };

    const userSchema = {
        minValue: {
            'ui:widget': 'range',
        },
        maxValue: {
            'ui:widget': 'range',
        },
    };


    const handleSubmit = (e) => {
        console.log('Form data:', formData);
    };


    const handleInputChange = (e, propertyName) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [propertyName]: Number(value) }));
    };


    return (
        <div>
            <h1 >Range Slider Form</h1>
            <div>
                <input type="number" value={formData.minValue} onChange={(e) => handleInputChange(e, 'minValue')} />
                <br /><br />
                <input type="number" value={formData.maxValue} onChange={(e) => handleInputChange(e, 'maxValue')} />
                <br /><br />
                <Form schema={schema} uiSchema={userSchema} formData={formData} onChange={({ formData }) => setFormData(formData)} onSubmit={handleSubmit} >
                <br />
                <div>
                <button type="submit">Submit</button>
                </div>
                </Form>
            </div>
        </div>
    );
};

export default RangeSliderForm;
