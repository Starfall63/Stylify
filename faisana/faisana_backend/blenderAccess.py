import bpy
import os
import sys

def set_shape_key_value(obj, key_name, value):
    # Check if the shape key exists
    if key_name in obj.data.shape_keys.key_blocks:
        # Set the value of the shape key
        obj.data.shape_keys.key_blocks[key_name].value = value
    else:
        print("Shape key '{}' not found.".format(key_name))

def main():
    # Replace 'path_to_blender_file' with the actual path to your Blender file
    bpy.ops.wm.open_mainfile(filepath='faisana_backend/BaseMashFemale.blend')
    print(sys.argv)
    
    # Replace 'Object' with the name of your object
    obj = bpy.data.objects['body']

    # Replace these values with the desired values for the shape keys
    waist_value = float(sys.argv[2])
    hips_value = float(sys.argv[3] )
    chest_value = float(sys.argv[1])
    height_value = float(sys.argv[4])

    # Set the values of the shape keys
    set_shape_key_value(obj, 'waist', waist_value)
    set_shape_key_value(obj, 'hips', hips_value)
    set_shape_key_value(obj, 'chest', chest_value)
    set_shape_key_value(obj, 'height', height_value)

    # Render the scene
    bpy.ops.render.render(write_still=True)

    # Save the rendered image
    output_path = '/Users/elen_/faisana/faisana_backend'  # Output path to a directory
    image_name = "rendered_image.png"
    output_file = os.path.join(output_path, image_name)

    # Get the rendered image
    rendered_image = bpy.data.images['Render Result']

    # Save the image to file
    rendered_image.save_render(output_file)

if __name__ == "__main__":
    main()