import React from 'react';
import { BarChart, Bar,ResponsiveContainer, XAxis, YAxis, Tooltip} from 'recharts';
import styled from 'styled-components';
import theme from '../../../globals/theme';

//data
import data from '../skillsData/skillsData';

const SkillCharts = (props) => {

    const DataFormater = (number) => {
        if(number === 1){
            return 'Basics';
        }else if(number === 2){
            return 'Some experience';
        }else if(number === 3){
            return 'Well experienced';
        }else if(number === 4){
            return 'Fluent';
        }else return '';
    }

    const getIntroOfPage = (label) => {
        if (label === 'React') {
            return "I took some courses, but I haven't made any commercial project yet.";
        }if (label === 'JavaScript') {
            return "I have around 3 years experience in working with JavaScript. Up to now I was using jQuery framework.";
        }if (label === 'CSS') {
            return "I am learning CSS since I was at school. Styling applications is not a big problem for me. ";
        }if (label === 'HTML') {
            return 'I started with HTML in gymnasium. When I wrote my first code in IT class I knew I will stay with it for longer time.';
        }if (label === 'PHP') {
            return 'I know some basics of PHP but back-end was never so exciting for me like the front-end is';
        }else {
            return 'Use correct data';
        }
    };

    const CustomTooltipWrapper = styled.div`
        background-color: rgba(0,0,0,0.3);
        max-width: 300px;
        padding: 20px;
        color: #ffffff;
        border: 1px solid gray;
        border-radius: 5px;
    `;
      
    const CustomTooltip = ({ active, label }) => {
        if (active) {
            return (
                <CustomTooltipWrapper className="custom-tooltip">
                    <h3>{label}</h3>
                    <p className="intro">{getIntroOfPage(label)}</p>
                </CustomTooltipWrapper>
            );
        }
        return null;
    };

    
    return(
        <ResponsiveContainer>
            <BarChart data={data}>
                <XAxis tick={{fontSize: 12}} dataKey="name" />
                <YAxis tick={{fontSize: 12}} width={110} tickFormatter={DataFormater} /> 
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Skills" fill={theme.colors.green} animationDuration={1700} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default SkillCharts;