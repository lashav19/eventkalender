from pydantic import BaseModel, Field
from pydantic_core import _pydantic_core as pc

class event(BaseModel):
    name: str = Field(..., min_length=1)
    place: str = Field(..., min_length=1)

    
try:
    event1 = event(
                name="bjørnsonhuset", 
                place=""
                )
    print(event1)
except pc.ValidationError:
     pass