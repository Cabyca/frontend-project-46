import getData from "./getData.js"
import parser from "./parser.js"

const genDiff = (pathToFile1, pathToFile2, formatName = 'stylish') => {

    const [dataRaw1, extensionFile1] = getData(pathToFile1)
    const [dataRaw2, extensionFile2] = getData(pathToFile2)

    // console.log(typeof dataRaw1, extensionFile1)
    // console.log(typeof dataRaw2, extensionFile2)

    const data1 = parser(dataRaw1, extensionFile1)
    const data2 = parser(dataRaw2, extensionFile2)

    // console.log(data1)
    // console.log(data2)

    // Уже есть распарсенные данные
    

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
