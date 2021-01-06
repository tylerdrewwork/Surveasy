import React from 'react';
import { Page, Text, View, Document, Stylesheet } from '@react-pdf/renderer';

const GraphPdf = (props) => {
    console.log(props.survey.title);

    return (
        <Document>
            <Page>
                <View>
                    <Text>Hello World</Text>

                    <Text>Survey Title {props.survey.title}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default GraphPdf;