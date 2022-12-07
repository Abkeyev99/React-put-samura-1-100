import React from 'react';
import s from './ProfaileInfo.module.css'

export const ProfaileInfo = () => {
    return (
        <div>
            <div className={s.bestFoto}>
                <img
                    src='https://hlpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
};

