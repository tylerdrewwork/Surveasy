import React from 'react';
import { Page, Text, Image, View, Document, Stylesheet } from '@react-pdf/renderer';

const GraphPdf = (props) => {

    function renderGraphImage(graphReferences) {

        const graphImages = []

        for (let i = 0; i < graphReferences.length; i++) {
            if (graphReferences[i].current) {
                graphImages.push(graphReferences[i].current.chartInstance.toBase64Image());
            }
        }

        return (
            <View>
                {graphImages.map(image => {
                    console.log(image);
                    return <Image src={image} />
                })}
            </View>
        );
    }

    return (
        <Document>
            <Page>
                <View>
                    <Text>{props.survey.title}</Text>

                    {renderGraphImage(props.graphs.current)}
                </View>
            </Page>
        </Document>
    );
}

export default GraphPdf;