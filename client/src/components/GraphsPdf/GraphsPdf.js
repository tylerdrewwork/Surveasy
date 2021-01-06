import React from 'react';
import { Page, Text, View, Document, Stylesheet } from '@react-pdf/renderer';

const GraphPdf = (props) => {

    console.log(props.graph)

    function renderGraphData() {
        return <Text>Graph Data</Text>
    }

    return (
        <Document>
            <Page>
                <View>
                    <Text>{props.survey.title}</Text>

                    {renderGraphData()}
                </View>
            </Page>
        </Document>
    );
}

export default GraphPdf;