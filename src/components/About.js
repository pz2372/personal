import React, { Component } from 'react';
import AceEditor from "./AceEditors";

const about = 
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>Hello, my name is <b>Peter Zheng.</b></h1>
        <h2>Meaning of life is what you make of it</h2>
        <p>
            Full Stack Engineer with analytical and driven mindset seeking innovative projects 
            and engaging environment. Expertise in React and Node.js with four years of experience 
            in building scalable web applications. Demonstrated proficiency in team leadership and 
            streamlining development processes to establish effective project delivery.
        </p>

        <script>
            class Peter {
                constructor(origin, education, email, interests, topFoods) {
                    this.origin = "Charlotte, NC";
                    this.education = "University of North Carolina at Chapel Hill";
    
                    this.interests = ["gym", "reading", "traveling", "food", "movies"];
                    this.topFoods = ["tacos", "sushi", "ramen"];
                }
    
                getProgrammingLanguages() {
                    return this.languages = ["JavaScript, TypeScript, Python, HTML, CSS, SQL];
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
</html>

`;

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
