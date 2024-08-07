import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';
import { Spritesheet } from 'pixi.js';

import State from "./State";
import { Types } from "./Types";

export default class Resource extends State {

    public assets: Record<string | number, PIXI.Texture[]>;

    constructor(animations: Record<string | number, PIXI.Texture[]>, reset: string) {
        super(animations[reset]);

        this.assets = animations;
    }

    public static async loadDynamicAssets(assetType: Types.BLOCKS) {
        const { default: metaData } = await import(`./../../public/assets/tileset/mc_block_${assetType}.json`);
        const { mcBlocks: mcBlocksdAsset } = await Assets.loadBundle('tileset');

        const spritesheet = new Spritesheet(mcBlocksdAsset, <PIXI.SpritesheetData>metaData)
        spritesheet.parse();

        return spritesheet.animations;
    }

}