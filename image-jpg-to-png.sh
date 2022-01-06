#!/bin/bash
`for file in $(find images -name '*.png'); do convert "$file"  "${file%.*}.jpg"; done`



