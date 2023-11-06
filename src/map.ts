let map: string[][];

export function createMap(rowCount: number, columnCount: number): void {
    map = Array.from(
        { length: rowCount },           // take rowCount as length
        (_, i) => Array.from(           // fill with new array
            { length: columnCount },    // take columnCount for every row
            (_, j) => [i, j].join('')  // initialize cell with some value
        )
    );

    // console.log(map[5][5]);
    console.log(map);

}

// createMap(4, 8);


