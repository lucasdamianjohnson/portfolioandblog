#!/bin/bash
#root images
`for file in $(find images -name '*.jpg' not -name '*-thumb.jpg'); do convert "$file" -resize 50% "${file%.*}-thumb.jpg"; done`
`for file in $(find images -name '*.png') not -name '*-thumb.jpg'); do convert "$file" -resize 50% "${file%.*}-thumb.png"; done`
`for file in $(find images -name '*.jpg'); do cwebp -q 80 "$file" -o "${file%.*}.webp"; done`
`for file in $(find images -name '*.png'); do cwebp -q 80 "$file" -o "${file%.*}.webp"; done`

