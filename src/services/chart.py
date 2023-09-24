# generate_image.py
from PIL import Image, ImageDraw

def create_image():
    width, height = 300, 300
    image = Image.new('RGB', (width, height), color = 'red')
    d = ImageDraw.Draw(image)
    d.text((10,10), "Hello from Python!", fill='white')
    image.save('output.png')

if __name__ == "__main__":
    create_image()
