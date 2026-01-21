import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'
import useWindowStore from '#store/window';

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    return (
        <>
            <div id="Window-header">
                <WindowControls target="imgfile" />
                <h2>{data.title}</h2>
            </div>
            <div className="content p-4 flex justify-center items-center">
                <img src={data.imageUrl} alt={data.title} className="max-w-full max-h-full" />
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow