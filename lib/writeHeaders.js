var config = require('../config/baseConfig');
var writeCSV = require('./writeCSV');


var writeHeaders = {

    writeAllHeaders: function(outputDir) {
        var variablesFilename = outputDir + config.filenames.variables_table;
        var variablesHeaders = ['AppID', 'VariableID', 'Name', 'IsScript', 'Definition'];
        writeCSV.writeHeadersToFile(variablesFilename, variablesHeaders);

        var variablesFilename = outputDir + config.filenames.dimensions_table;
        var dimensionsHeaders = ['AppID', 'DimensionID', 'Grouping', 'FieldDefinition', 'FieldLabel', 'DimensionTitle', 'Title', 'Description', 'Tags'];
        writeCSV.writeHeadersToFile(variablesFilename, dimensionsHeaders);

        var variablesFilename = outputDir + config.filenames.measures_table;
        var measuresHeaders = ['AppID', 'MeasureID', 'Name', 'Definition', 'Grouping', 'Expressions', 'ActiveExpressions', 'Title', 'Description', 'Tags'];
        writeCSV.writeHeadersToFile(variablesFilename, measuresHeaders);

        var appsFilename = outputDir + config.filenames.apps_table;
        var appsHeaders = ['AppID', 'AppName', 'ModifiedDate', 'IsPublished', 'PublishedDate'];
        writeCSV.writeHeadersToFile(appsFilename, appsHeaders);
    }
}

module.exports = writeHeaders;