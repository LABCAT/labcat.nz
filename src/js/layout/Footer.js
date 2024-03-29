import React from 'react';
import { Link } from '@reach/router';

export default function Footer(props) {
    if (!props.display) { 
        return null; 
    }
    
    return (
        <footer id="site-footer">
            <Link to="animations">
                <span>Animations</span>
            </Link>
            <Link to="building-blocks">
                <span>Building Blocks</span>
            </Link>
            <Link to="creative-coding">
                <span>Creative Coding</span>
            </Link>
            <Link to="audio">
                <span>Audio Projects</span>
            </Link>
        </footer>
    )
}

