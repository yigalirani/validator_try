export type Watcheers = Record<string, {
    cmd: string;
    watch: string[];
    env?: Record<string, string | number>;
}>;
