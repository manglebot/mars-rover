let map: string[][];

export function createMap(rowCount: number, columnCount: number): Array<number> {
    map = Array.from(
        { length: rowCount },
        (_, i) => Array.from(
            { length: columnCount },
            (_, j) => [rowCount -i -1, j].join('')
        )
    );

        

    // shows nice diagram of map for checking data
    console.log(map);

    return [ rowCount, columnCount ];
}


