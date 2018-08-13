import {
    IMAGES
} from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCESS,
    images
});

const setError = images => ({
    type: IMAGES.LOAD_SUCESS,
    images
});

export {
    loadImages,
    setImages,
    setError
};
