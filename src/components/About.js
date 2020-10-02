import React, { Component } from 'react';
import AceEditor from "./AceEditors";

const about = 
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>Hello, my name is <b>Peter Zheng.</b></h1>
        <h2>Meaning of life is what you make of it.</h2>
        <p>
            I am an aspiring software engineer from Charlotte, North Carolina.
            I spend most of my time building websites, developing applications,
            and studying financial instruments. 
        </p>

        <script>
            class Peter {
                constructor(origin, education, email, interests, topFoods) {
                    this.origin = "Kings Mountain, NC";
                    this.education = "University of North Carolina at Chapel Hill";
                    this.email = "pz2372@live.unc.edu";
    
                    this.interests = ["stocks", "reading", "traveling", "food", "movies"];
                    this.topFoods = ["tacos", "sushi", "ramen"];
                }
    
                getProgrammingLanguages() {
                    return this.languages = ["JavaScript, Java, Python, HTML, CSS, C, Swift];
                }

                getFavoriteQuote() {
                    return "It is better to aim high and miss than to aim low and hit"
                }
    
                getInTouch() {
                    return Contact.js;
                }
            }
        </script>

    </body>
</html>`;

export default class About extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / about.js</h3>
                </div>
                <AceEditor values={about}/>
            </div>
        )
    }
}
