import { Graphics } from 'pixi.js';

export function addTrees(app: any) {
    const treeWidth = 200;

    const y = app.screen.height - 20;

    const spacing = 15;

    const count = app.screen.width / (treeWidth + spacing) + 1;

    const trees: any[] = [];

    for (let i = 0; i < count; i++) {
        const treeHeight = 225 + Math.random() * 50;
        const tree = createTree(treeWidth, treeHeight);

        tree!.x = i * (treeWidth + spacing);
        tree!.y = y;

        app.stage.addChild(tree);
        trees.push(tree);
    }

    app.ticker.add((time: any) => {
        const dx = time.deltaTime * 2;

        trees.forEach((tree: any) => {
            tree.x -= dx;

            if (tree.x <= -(treeWidth / 2 + spacing)) {
                tree.x += count * (treeWidth + spacing) + spacing * 3;
            }
        })
    })
}

function createTree(width: number, height: number): Graphics | undefined {
    const trunkWidth = 30;
    const trunkHeight = height / 4;

    const crownHeight = height - trunkHeight;
    const crownLevels = 4;
    const crownLeversHeight = crownHeight / crownLevels;
    const crownWidthIncrement = width / crownLevels;

    const crownColor = 0x264d3d;
    const trunkColor = 0x563929;

    const graphics = new Graphics()
        .rect(-trunkWidth / 2, -trunkHeight, trunkWidth, trunkHeight)
        .fill({color: trunkColor});

    for (let i = 0; i < crownLevels; i++) {
        const y = -trunkHeight - crownLeversHeight * i;
        const levelWidth = width - crownWidthIncrement * i;
        const offset = i < crownLevels - 1 ? crownLeversHeight / 2 : 0;

        graphics
            .moveTo(-levelWidth / 2, y)
            .lineTo(0, y - crownLeversHeight- offset)
            .lineTo(levelWidth / 2, y)
            .fill({color: crownColor});
    }

    return graphics;
}