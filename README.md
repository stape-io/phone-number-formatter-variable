# Phone Number Formatter Variable for Google Tag Manager Server Container

A Google Tag Manager variable template that formats phone numbers to the E.164 standard format. The formatter handles:

- International phone number formatting with country code support
- Removal of special characters (spaces, dashes, parentheses)
- Automatic country code prefixing based on ISO 3166 country codes
- Support for 200+ country codes
- Special handling for national/trunk prefixes for some countries (Lithuania, Sweden, Hungary, Germany etc.)

## Features

- Converts phone numbers to E.164 format (+[country code][number])
- Preserves existing valid E.164 formatted numbers
- Handles numbers with or without country code prefix
- Supports both + and 00 international prefixes
- Cleans phone numbers of common formatting characters

## Usage

- Input a phone number (required)
- Specify country code using ISO 3166 format (optional)
- Returns formatted E.164 phone number with proper country code prefix

## Useful links:

- [Step-by-step guide on how to configure Phone Number Formatter variable](https://stape.io/blog/phone-number-formatter-variable-for-google-tag-manager-container)

## Open Source

Initial development was done by [Lars Friis](https://www.linkedin.com/in/lars-friis/).

Maintenance and unit tests added by [Giovani Ortolani Barbosa](https://www.linkedin.com/in/giovani-ortolani-barbosa/).

Phone Number Formatter Variable for GTM Server Container is developed and maintained by [Stape Team](https://stape.io/) under the Apache 2.0 license.
