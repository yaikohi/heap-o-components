import React, {Component} from "react";
import { Histogram } from './Histogram';
import {Heading} from "@instructure/ui-heading";
import {tests} from './SelectData';

// This file displays all the components of the histogram.
export class ChartOverview extends Component {

    render() {
        return (
            <div>
                <Heading level="h1" as="h2" margin="0 0 x-small"> Placeholder Histogram</Heading>
                <p>Deze histogram laat de toetsresultaten zien van alle toetsen van een jaar.</p>
                <p>
                    Het is mogelijk om alleen 1 soort resultaat te laten zien (alleen voldoendes of alleen onvoldoendes per toets).
                    <br/>
                    Klik op "voldoendes" of "onvoldoendes" bovenin de grafiek om deze te laten verdwijnen of ze weer terug te halen.
                </p>
                <tests />
                <Histogram />
            </div>
        )
    }
}