import getData from "./getData.js"

const genDiff = (pathToFile1, pathToFile2, $formatName = 'stylish') => {

    const [dataRaw1, extensionFile1] = getData(pathToFile1)
    const [dataRaw2, extensionFile2] = getData(pathToFile2)

    console.log(dataRaw1, extensionFile1)
    console.log(dataRaw2, extensionFile2)

}

export default genDiff

// function genDiff(string $pathToFile1, string $pathToFile2, $formatName = 'stylish'): string
// {
//     [$dataParsing1, $extensionFile1] = getData($pathToFile1);
//     [$dataParsing2, $extensionFile2] = getData($pathToFile2);

//     $data1 = parser($dataParsing1, $extensionFile1);
//     $data2 = parser($dataParsing2, $extensionFile2);

//     $astTree = buildAstTree($data1, $data2);

//     $resultOfDiff = format($astTree, $formatName);

//     return $resultOfDiff;
// }
