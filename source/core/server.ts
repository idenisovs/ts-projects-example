export default class Server {
    static Points(): Promise<number[][]> {
        const points = [
            [ 1, 2 ],
            [ 4, 2 ]
        ];

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(points);
            }, 2000);
        })

    }
}
