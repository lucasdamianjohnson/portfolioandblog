#!/bin/bash
#root images
`for file in images/*.jpg; do convert "$file" -resize 50% "${file%.*}-thumb.jpg"; done`
`for file in images/*.png; do convert "$file" -resize 50% "${file%.*}-thumb.png"; done`
#blog images
`for file in images/blog/*.jpg; do convert "$file" -resize 50% "${file%.*}-thumb.jpg"; done`
`for file in images/blog/*.png; do convert "$file" -resize 50% "${file%.*}-thumb.png"; done`


`for file in images/*; do cwebp -q 80 "$file" -o "${file%.*}.webp"; done`
`for file in images/blog/*; do cwebp -q 80 "$file" -o "${file%.*}.webp"; done`



