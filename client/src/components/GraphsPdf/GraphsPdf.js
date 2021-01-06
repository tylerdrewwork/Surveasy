import React from 'react';
import { Page, Text, Image, View, Document, Stylesheet } from '@react-pdf/renderer';

const GraphPdf = (props) => {
    function renderGraphImage() {
        const graphImage = props.graph.current.chartInstance.toBase64Image();

        return <Image src={graphImage} />;
    }

    return (
        <Document>
            <Page>
                <View>
                    <Text>{props.survey.title}</Text>

                    {renderGraphImage()}
                </View>
            </Page>
        </Document>
    );
}

export default GraphPdf;