#!/usr/bin/python3
"""Program lookup all attributes and methods of an object."""

def lookup(obj):
    """Return a list of an object's available attributes."""
    return (dir(obj))
