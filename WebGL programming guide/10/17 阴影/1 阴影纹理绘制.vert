#version 300 es
in vec4 a_position;
in vec2 a_texcoord;
in vec3 a_normal;

uniform vec3 u_lightWorldPosition;
uniform vec3 u_viewWorldPosition;

uniform mat4 u_projection;
uniform mat4 u_view;
uniform mat4 u_world;
uniform mat4 u_textureMatrix;

out vec2 v_texcoord;
out vec4 v_projectedTexcoord;
out vec3 v_normal;

out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;

void main() {
    // Multiply the position by the matrix.
    vec4 worldPosition = u_world * a_position;

    gl_Position = u_projection * u_view * worldPosition;

    // Pass the texture coord to the fragment shader.
    v_texcoord = a_texcoord;

    v_projectedTexcoord = u_textureMatrix * worldPosition;

    // orient the normals and pass to the fragment shader
    v_normal = mat3(u_world) * a_normal;

    // compute the world position of the surface
    vec3 surfaceWorldPosition = (u_world * a_position).xyz;

    // compute the vector of the surface to the light
    // and pass it to the fragment shader
    v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;

    // compute the vector of the surface to the view/camera
    // and pass it to the fragment shader
    v_surfaceToView = u_viewWorldPosition - surfaceWorldPosition;
}