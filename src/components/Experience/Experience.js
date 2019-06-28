import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import ProjectCard from './ProjectCard/ProjectCard';

import expData from './expData/expData';

const Experience = () => {

    const eduData = expData.education; //array of objects with education
    const workData = expData.work; //array of objects with work experience
    return(
        <>
            <InfoCard 
                title='My Education'
                textInfo='Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
            >
                {
                    eduData.map(data => {
                        return <ProjectCard 
                            key={Math.random()}
                            title={data.title}
                            place={data.place}
                            date={data.date}
                            time={data.time}
                            mainInfo={data.mainInfo}
                        />
                    })
                }
            </InfoCard>
            <InfoCard 
                title='Wrok experience'
                textInfo='Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
            >
                {
                    workData.map(data => {
                        return <ProjectCard 
                            key={Math.random()}
                            title={data.title}
                            place={data.place}
                            date={data.date}
                            time={data.time}
                            mainInfo={data.mainInfo}
                        />
                    })
                }
            </InfoCard>
        </>
    );
}

export default Experience;