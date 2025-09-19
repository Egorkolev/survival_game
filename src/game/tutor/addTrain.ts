import { Container, Graphics } from "pixi.js";

export function addTrain(app: any, container: any) {
    const head = createTrainHead(app);

    container.addChild(head);

    app.stage.addChild(container);

    const scale = 0.75;

    container.scale.set(scale);

    container.x = app.screen.width / 2 - head.width / 2;
    container.y = app.screen.height - 35 - 55 * scale;
}

function createTrainHead(app: any) {
    const container = new Container();

    const frontHeight = 100;
    const frontWidth = 150;
    const frontRadius = frontHeight / 2;

    const cabinHeight = 200;
    const cabinWidth = 150;
    const cabinRadius = 15;

    const chimneyBaseWidth = 30;
    const chimneyTopWidth = 50;
    const chimneyHeight = 70;
    const chimneyDomeHeight = 25;
    const chimneyTopOffset = (chimneyTopWidth - chimneyBaseWidth) / 2;
    const chimneyStartX = cabinWidth + frontWidth - frontRadius - chimneyBaseWidth;
    const chimneyStartY = -frontHeight;

    const roofHeight = 25;
    const roofExcess = 20;

    const doorWidth = cabinWidth * 0.7;
    const doorHeight = cabinHeight * 0.7;
    const doorStartX = (cabinWidth - doorWidth) * 0.5;
    const doorStartY = -(cabinHeight - roofHeight)  * 0.2 - doorHeight;

    const windowWidth = doorWidth * 0.8;
    const windowHeight = cabinHeight * 0.4;
    const offset = (doorWidth - windowWidth) / 2;

    const graphics = new Graphics()
        .moveTo(chimneyStartX, chimneyStartY)
        .lineTo(chimneyStartX - chimneyTopOffset, chimneyStartY - chimneyHeight + chimneyDomeHeight)
        .quadraticCurveTo(
            chimneyStartX + chimneyBaseWidth / 2,
            chimneyStartY - chimneyHeight - chimneyDomeHeight,
            chimneyStartX + chimneyBaseWidth + chimneyTopOffset,
            chimneyStartY - chimneyHeight + chimneyDomeHeight,
        )
        .lineTo(chimneyStartX + chimneyBaseWidth, chimneyStartY)
        .fill({color: 0x121212})

        .roundRect(
            cabinWidth - frontRadius - cabinRadius,
            -frontHeight,
            frontWidth + frontRadius + cabinRadius,
            frontHeight,
            frontRadius,
        )
        .fill({ color: 0x7f3333 })

        .roundRect(0, -cabinHeight, cabinWidth, cabinHeight, cabinRadius)
        .fill({ color: 0x725f19 })

        .rect(-roofExcess / 2, cabinRadius - cabinHeight - roofHeight, cabinWidth + roofExcess, roofHeight)
        .fill({ color: 0x52431c })

        .roundRect(doorStartX, doorStartY, doorWidth, doorHeight, cabinRadius)
        .stroke({ color: 0x52431c, width: 3 })

        .roundRect(doorStartX + offset, doorStartY + offset, windowWidth, windowHeight, 10)
        .fill({ color: 0x848484 });

        const bigWheelRadius = 55;
        const smallWheelRadius = 35;
        const wheelGap = 5;
        const wheelOffsetY = 5;

    const backWheel = createTrainWheel(bigWheelRadius);
    const midWheel = createTrainWheel(smallWheelRadius);
    const frontWheel = createTrainWheel(smallWheelRadius);

    backWheel.x = bigWheelRadius;
    backWheel.y = wheelOffsetY;
    midWheel.x = backWheel.x + bigWheelRadius + smallWheelRadius + wheelGap;
    midWheel.y = backWheel.y + bigWheelRadius - smallWheelRadius;
    frontWheel.x = midWheel.x + smallWheelRadius * 2 + wheelGap;
    frontWheel.y = midWheel.y;

    container.addChild(graphics, backWheel, midWheel, frontWheel);

    app.ticker.add((time: any) => {
        const dr = time.deltaTime * 0.15;

        backWheel.rotation += dr * (smallWheelRadius / bigWheelRadius);
        midWheel.rotation += dr;
        frontWheel.rotation += dr;
    });

    return container;
}

function createTrainWheel(radius: any) {
    const strokeThickness = radius / 3;
    const innerRadius = radius - strokeThickness;

    return (
        new Graphics()
            .circle(0, 0, radius)

            .fill({ color: 0x848484 })

            .stroke({ color: 0x121212, width: strokeThickness, alignment: 1 })

            .rect(-strokeThickness / 2, -innerRadius, strokeThickness, innerRadius * 2)
            .rect(-innerRadius, -strokeThickness / 2, innerRadius * 2, strokeThickness)
            .fill({ color: 0x4f4f4f })
    );
}