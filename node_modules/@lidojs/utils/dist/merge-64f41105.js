import { l as lodashExports } from './lodash-d1b9d121.js';

const mergeWithoutArray = (obj, source, customizer) => {
    if (lodashExports.isArray(obj) || lodashExports.isArray(source)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return source;
    }
    if (!customizer) {
        customizer = (objValue, srcValue) => {
            if (lodashExports.isArray(objValue)) {
                return srcValue;
            }
            return undefined;
        };
    }
    return lodashExports.mergeWith(obj, source, customizer);
};

export { mergeWithoutArray as m };
