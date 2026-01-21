import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'
import useWindowStore from '#store/window';

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    return (
        <>
            <div id="Window-header">
                <WindowControls target="txtfile" />
                <h2>{data.name}</h2>
            </div>
            <div className="content p-4">
                {data.image && <img src={data.image} alt={data.name} className="mb-5" />}
                {data.subtitle && <h3 className="text-lg font-semibold mb-2">{data.subtitle}</h3>}
                {data.description && data.description.map((para, i) => (
                    <p key={i} className="mb-2">{para}</p>
                ))}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow