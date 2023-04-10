import { proxy } from 'valtio';

const state = proxy({
intro: true,
color: '#EFBD48',
isLogoTexture: true,
isFullTexture: false,
logoDecal: './threejs.png',
fullDecal: './theejs.png',

});


export default state;