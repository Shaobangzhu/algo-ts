/**
 * 359. Logger Rate Limiter 控制台日志限流器
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */
export class Logger {

    // 用于记录每条消息上一次打印的时间戳
    private msgTimestamps: Map<string, number>;

    constructor() {
        this.msgTimestamps = new Map();
    }

    /**
     * 尝试打印一条日志消息
     * @param timestamp 当前时间 (单位： 秒, 非递减)
     * @param message 要打印的消息
     * @returns 如果允许打印返回 true, 否则 false 
     */
    shouldPrintMessage(timestamp: number, message: string): boolean {
        const lastTime = this.msgTimestamps.get(message);
        // 如果消息是第一次出现, 或者距离上次打印已超过10秒，允许打印
        if (lastTime === undefined || timestamp - lastTime >= 10) {
            this.msgTimestamps.set(message, timestamp);
            return true;
        }
        return false;
    }
}