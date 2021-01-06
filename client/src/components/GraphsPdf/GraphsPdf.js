import React from 'react';
import { Page, Text, View, Document, Stylesheet } from '@react-pdf/renderer';

import { Line, Bar, Pie } from "react-chartjs-2";

const GraphPdf = (props) => {
    console.log(props.survey.title);
    console.log(props.graph);

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