/**
 * Should be Used in Color Class
 */
export class ColorOutboundValue extends Error
{
  constructor()
  {
    super("Out of Range: Value Should be Between 0 - 255");
  }
}

export class TagError extends Error
{
  constructor()
  {
    super("Tag Does Not Exist");
  }
}
