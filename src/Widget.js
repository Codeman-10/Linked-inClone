import { FiberManualRecordRounded, InfoRounded } from '@material-ui/icons'
import React from 'react'
import './Widget.css'
function Widget() {
    const newsArticle=(heading,subtitle)=>{
        return (
            <div className="widget_article">
                <div className="widgetarticle_left">
                    <FiberManualRecordRounded/>

                </div>
                <div className="widgetarticle_right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>

                </div>

            </div>
        )
    }
    return (
        <div className="widget">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoRounded/>

            </div>
            {newsArticle("Google, how do I get to Google?","Top news - 343300 readers")}
            {newsArticle("Gokul is web dev","Budding Developer - 232300 readers")}
            {newsArticle("Ncv is a bot or player","Discusion-worldwide- 55530 readers")}
            {newsArticle("KDP as ChieF-Minister","Top news - 10000 readers")}
            {newsArticle("Harishwar and his CTS job","sad Story - 10000 readers")}

        </div>
    )
}

export default Widget
