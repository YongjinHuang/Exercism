// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * 
 * @param {number} width 
 * @param {number} height 
 * 
 */
// @ts-check
/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
/**
 *
 * @param {number} width
 * @param {number} height
 *
 */
export class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }
    /**
     *
     * @param {number} newWidth
     * @param {number} newHeight
     */
    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}


/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
/**
 *
 * @param {number} x
 * @param {number} y
 */
export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     *
     * @param {number} newX
     * @param {number} newY
     */
    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}


export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600)
        this.position = new Position()
        this.size = new Size()
    }
    /**
     * 
     * @param {Size} newSize 
     */
    resize(newSize) {
        const { x, y } = this.position;
        const { width: newWidth, height: newHeight } = newSize;
        const { width: screenWidth, height: screenHeight } = this.screenSize;
        this.size = new Size(
            newWidth < 1 ? 1 : x + newWidth > screenWidth ? screenWidth - x : newWidth,
            newHeight < 1 ? 1 : y + newHeight > screenHeight ? screenHeight - y : newHeight
        );
    }
    /**
     * 
     * @param {Position} newPosition 
     */
    move(newPosition) {
        const { x: nx, y: ny } = newPosition;
        const { width: screenWidth, height: screenHeight } = this.screenSize;
        const { width, height } = this.size;
        this.position = new Position(
            nx < 0 ? 0 : nx + width > screenWidth ? screenWidth - width : nx,
            ny < 0 ? 0 : ny + height > screenHeight ? screenHeight - height : ny
        );
    }

}

/**
 * 
 * @param {ProgramWindow} programWindow 
 */
export function changeWindow(programWindow) {
    programWindow.screenSize = new Size(800, 600)
    programWindow.size = new Size(400, 300)
    programWindow.position = new Position(100, 150)
    return programWindow;
}