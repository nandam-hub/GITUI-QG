import { t, ClientFunction } from 'testcafe';
import fs from 'fs/promises';
import path from 'path';

export class PdfActionHelper {
  constructor(baseApiUrl) {
    this.baseApiUrl = baseApiUrl;
  }

  /**
   To Validate the response returns 200 status code
   */
  async validateResponse(response, expectedStatusCode = 200, expectedBody = {}) {
    await t.expect(response.status).eql(expectedStatusCode);

    // Use ClientFunction to validate response body
    const compareBody = ClientFunction((expectedBody) => {
      return expectedBody === response.body;
    });
    await t.expect(compareBody(expectedBody)).eql(true);
  }

  /**
   * To save the file in form validation server
   * @param {string} filePath- Provide file path to access the file
   * @returns response
   */
  async saveFile(filePath) {
    try {
      const data = await fs.readFile(filePath)
      const fileName = path.basename(filePath)
      const pdfBlob = new Blob([data], { type: 'application/pdf' });
      const formData = new FormData();
      formData.append('file', pdfBlob, fileName);

      const response = await fetch(this.baseApiUrl + 'savefile/', {
        method: 'POST',
        body: formData
      })
      console.log('saveFile Response Status : ' + response.status)
      const result = await response.json()

      console.log(result.filePath)
      return result.filePath
    }
    catch (error) {
      console.error('Error:', error)
      return null
    }
  }

 /**
  * To validate whole pdf content. Used for static content
  * @param {string} endpoint 
  * @param {string} baseFilePath 
  * @param {string} actualFilePath 
  * @param {*} formValidationType 
  * @returns response
  */
  async comparePDFFiles(endpoint, baseFilePath, actualFilePath, formValidationType) {
    // Creating request body
    const requestBody = {
      base_file_path: baseFilePath,
      actual_file_path: actualFilePath
    };
    // Performing the POST request
    const response = await fetch(`${this.baseApiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Logging the response status and content
    const responseBody = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Content:', JSON.stringify(responseBody));

    // TODO:Perform additional image comparison if needed
    //await this.getImage(baseFilePathEscaped, actualFilePathEscaped, responseBody, formValidationType);

    // Return the response
    return responseBody;
  }

  /**
   * To validate dynamic content in the pdf
   * @param {string} endpoint API URL to hit
   * @param {string} baseFilePath Template file path
   * @param {string} actualFilePath Actual file path to be validated
   * @param {string} excelFile Data file path that contains values to be vaidated
   * @param {Boolean} standardForm Pass True when Prefix and suffix is required
   * @param {string} Prefix Pass << to mark the field to be validated
   * @param {string} Suffix Pass >> to mark the end for teh field to be validated 
   * @returns response
   */
  async comparePDF_ValidateDynamic(endpoint, baseFilePath, actualFilePath, excelFile, standardForm = true, Prefix = "<<", Suffix = ">>") {
    // Creating request body
    let requestBody = null
    if (standardForm) {
      requestBody = {
        base_file_path: baseFilePath,
        actual_file_path: actualFilePath,
        data_file_path: excelFile,
        standard_form: standardForm,
        prefix: Prefix,
        suffix: Suffix
      };
    } else {
      requestBody = {
        base_file_path: baseFilePath,
        actual_file_path: actualFilePath,
        data_file_path: excelFile,
        standard_form: standardForm
      };
    }
    // Performing the POST request
    const response = await fetch(`${this.baseApiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    // Logging the response status and content
    const responseBody = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Content:', JSON.stringify(responseBody));

    // Return the response
    return responseBody;
  }

  /**
   * To ignore certain contents from validation in a pdf
   * @param {*} endpoint API URL to hit
   * @param {*} baseFilePath Template file path
   * @param {*} actualFilePath Actual file path to be validated
   * @param {*} standardForm Pass True when Prefix and suffix is required
   * @param {*} Prefix Pass << to mark the field to be validated
   * @param {*} Suffix Pass >> to mark the end for teh field to be validated 
   * @returns response
   */
  async ComparePDF_IgnoreDynamic(endpoint, baseFilePath, actualFilePath, standardForm = true, Prefix = "<<", Suffix = ">>") {
    // Creating request body
    let requestBody = null
    if (standardForm) {
      requestBody = {
        base_file_path: baseFilePath,
        actual_file_path: actualFilePath,
        standard_form: standardForm,
        prefix: Prefix,
        suffix: Suffix
      };
    } else {
      requestBody = {
        base_file_path: baseFilePath,
        actual_file_path: actualFilePath,
        standard_form: standardForm
      };
    }
    // Performing the POST request
    const response = await fetch(`${this.baseApiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    // Logging the response status and content
    const responseBody = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Content:', JSON.stringify(responseBody));
 
    // Return the response
    return responseBody;
  }
}