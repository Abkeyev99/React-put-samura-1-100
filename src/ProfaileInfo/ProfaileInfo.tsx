import React from 'react';
import s from './ProfaileInfo.module.css'

export const ProfaileInfo = () => {
    return (
        <div>
            <div className={s.bestFoto}>
                <img
                    src='https://cdn.tlgrm.app/channels/11/53/1153086394/avatar640.jpg?v=2'/>
            </div>
            <div className={s.descriptionBlock}>
                Avatar + Description
            </div>
        </div>
    );
};

