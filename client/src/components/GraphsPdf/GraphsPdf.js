import React from 'react';
import { Page, Text, View, Document, Stylesheet } from '@react-pdf/renderer';

const GraphPdf = () => {
    return (
        <Document>
            <Page>
                <View>
                    <Text>Hello World</Text>
                </View>
            </Page>
        </Document>
    );
}

export default GraphPdf;