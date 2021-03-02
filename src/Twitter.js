import React from 'react';

function Twitter(props) {
    return (
        <div>
            <a class="twitter-timeline"
                href="https://twitter.com/official_izone"
                data-chrome="nofooter">
                Tweets by @official_IZONE
            </a>

            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
        </div>
    );
}

export default Twitter;
