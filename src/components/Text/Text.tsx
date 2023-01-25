import { memo } from 'react';
import cls from './Text.module.scss';
import {classNames} from "../../helpers/classNames";

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    default = 'div'

}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'div';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
    [TextSize.default]: 'div'
};

export const Text = memo((props: TextProps) => {
    const {
        className = cls.default,
        title,
        text,
        size = TextSize.default,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, {}, [className, cls[size]])}>
            {title && (
                <HeaderTag
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
