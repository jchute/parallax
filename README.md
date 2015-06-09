# Parallax
A very simple Parallax Script

Requires jQuery to be included.

## Options

No options are required.  Though Offset will most likely need to be changed depending on the image file.

| Option  |  Type   | Default | Description |
|---------|---------|---------|-------------|
| offset  | Integer |   200   | Sets the intial position of the image.  Effected by the height of image, speed and direciton. |
|  speed  | Integer |   0.4   | Sets the speed at which the image moves in relation to the browser's scroll. 0 is static. |
| reverse | Boolean |  false  | Sets the direction of the scroll. True is the same direction as the scroll. False is against the scroll. |
|  image  | String  |   ''    | Sets the background image to use.  *Note that this can be set with CSS if preferred.* |

## Examples:

### Basic usage

    <script type="text/javascript" src="scripts/parallax.js"></script>
  
    <script type="text/javascript">
    $(document).ready(function(){
      $('.yourDiv').parallax();
    });
    </script>

CSS

    .yourDiv {
        background-image: url(/path/to/image.jpg); /* Only Background Position is effected */
    }
    
### Set image in declaration

    $('.yourDiv').parallax({
        image: 'path/to/image.jpg'
    });
    
### Using options

    $('.yourDiv').parallax({
      offset: 500,
      speed: 0.5,
      reverse: true,
      image: 'path/to/image.jpg'
    });
